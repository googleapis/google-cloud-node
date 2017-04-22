var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
        this.name = name;
        this.sound = sound;
    }
    Animal.prototype.hello = function () {
        return "The " + this.name + " says " + this.sound;
    };
    return Animal;
}());
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        _super.call(this, 'Lion', 'roar');
    }
    return Lion;
}(Animal));
function hello(name) {
    return 'Hello ' + name;
}
hello('you');
new Lion().hello();
/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
//# sourceMappingURL=out.js.map