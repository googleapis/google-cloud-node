package main

import (
	spannerpb "cloud.google.com/go/spanner/apiv1/spannerpb"
	"google.golang.org/protobuf/types/known/structpb"
)

// decodeValue converts a protobuf Value to a strictly-typed native Spanner value
// based on the column's field type metadata, exactly replicating Rust's decode_value.
func decodeValue(val *structpb.Value, fieldType *spannerpb.Type) interface{} {
	if val == nil {
		return nil
	}

	switch k := val.Kind.(type) {
	case *structpb.Value_NullValue:
		return nil
	case *structpb.Value_BoolValue:
		return k.BoolValue
	case *structpb.Value_NumberValue:
		return k.NumberValue
	case *structpb.Value_StringValue:
		s := k.StringValue
		if fieldType != nil {
			switch fieldType.Code {
			case spannerpb.TypeCode_INT64,
				spannerpb.TypeCode_TIMESTAMP,
				spannerpb.TypeCode_DATE,
				spannerpb.TypeCode_NUMERIC,
				spannerpb.TypeCode_BYTES,
				spannerpb.TypeCode_JSON:
				return s
			default:
				return s
			}
		}
		return s
	case *structpb.Value_ListValue:
		if k.ListValue == nil {
			return []interface{}{}
		}
		var elemType *spannerpb.Type
		if fieldType != nil && fieldType.ArrayElementType != nil {
			elemType = fieldType.ArrayElementType
		}
		arr := make([]interface{}, len(k.ListValue.Values))
		for i, v := range k.ListValue.Values {
			arr[i] = decodeValue(v, elemType)
		}
		return arr
	case *structpb.Value_StructValue:
		if k.StructValue == nil {
			return map[string]interface{}{}
		}
		st := make(map[string]interface{})
		if fieldType != nil && fieldType.StructType != nil {
			for _, f := range fieldType.StructType.Fields {
				var fieldVal *structpb.Value
				if v, ok := k.StructValue.Fields[f.Name]; ok {
					fieldVal = v
				} else {
					fieldVal = structpb.NewNullValue()
				}
				st[f.Name] = decodeValue(fieldVal, f.Type)
			}
		} else {
			for fName, fVal := range k.StructValue.Fields {
				st[fName] = decodeValue(fVal, nil)
			}
		}
		return st
	default:
		return nil
	}
}

// mergeProtoValues recursively merges chunked Protobuf values across streaming chunks,
// matching Rust's merge_proto_values implementation.
func mergeProtoValues(head *structpb.Value, tail *structpb.Value) *structpb.Value {
	if head == nil {
		return tail
	}
	if tail == nil {
		return head
	}

	switch h := head.Kind.(type) {
	case *structpb.Value_StringValue:
		if t, ok := tail.Kind.(*structpb.Value_StringValue); ok {
			h.StringValue += t.StringValue
		}
	case *structpb.Value_ListValue:
		if t, ok := tail.Kind.(*structpb.Value_ListValue); ok {
			if h.ListValue == nil {
				head.Kind = tail.Kind
				return head
			}
			if t.ListValue == nil {
				return head
			}
			if len(h.ListValue.Values) > 0 && len(t.ListValue.Values) > 0 {
				lastIdx := len(h.ListValue.Values) - 1
				merged := mergeProtoValues(h.ListValue.Values[lastIdx], t.ListValue.Values[0])
				h.ListValue.Values[lastIdx] = merged
				h.ListValue.Values = append(h.ListValue.Values, t.ListValue.Values[1:]...)
			} else {
				h.ListValue.Values = append(h.ListValue.Values, t.ListValue.Values...)
			}
		}
	case *structpb.Value_StructValue:
		if t, ok := tail.Kind.(*structpb.Value_StructValue); ok {
			if h.StructValue == nil {
				head.Kind = tail.Kind
				return head
			}
			if t.StructValue == nil {
				return head
			}
			if h.StructValue.Fields == nil {
				h.StructValue.Fields = make(map[string]*structpb.Value)
			}
			for k, v := range t.StructValue.Fields {
				if existing, exists := h.StructValue.Fields[k]; exists {
					h.StructValue.Fields[k] = mergeProtoValues(existing, v)
				} else {
					h.StructValue.Fields[k] = v
				}
			}
		}
	}
	return head
}
