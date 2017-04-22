
class Animal
  constructor: (name, sound) ->
    @name = name
    @sound = sound

  hello: () ->
    return 'The ' + name + ' says ' + sound

class Lion extends Animal
  constructor: () ->
    super('Lion', 'roar')

someOb =
  a : 'a',
  b : 'b'

console.log new Lion().alert

nums = [1, 2, 3, 4, 5]
square = (x) -> x*x;
allSquares = (square x for x in nums)

#
# Copyright 2016 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the 'License');
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an 'AS IS' BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
