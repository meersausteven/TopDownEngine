
import { Vector2 } from './../../collection/vector2.js';

import { AttributeBoolean } from './../../editor/attributes/attribute_boolean.js';
import { AttributeVector2 } from './../../editor/attributes/attribute_vector2.js';

import { Component } from './../component.js';

export class Collider extends Component {
        type = "Collider";

        constructor(isTrigger = false, offset = new Vector2()) {
                super();
                
                this.attributes['displayBounds'] = new AttributeBoolean('Display Bounds', false);
                this.attributes['isTrigger'] = new AttributeBoolean('Is Trigger', isTrigger);
                this.attributes['inverted'] = new AttributeBoolean('Inverted', false);
                this.attributes['offset'] = new AttributeVector2('Offset', offset);

                this.attributes['worldPos'] = new Vector2();
        }

        update() {
                this.attributes['worldPos'] = new Vector2(
                        this.gameObject.transform.attributes['position'].value.x + this.attributes['offset'].value.x,
                        this.gameObject.transform.attributes['position'].value.y + this.attributes['offset'].value.y
                );
                
                if (this.attributes['displayBounds'].value === true) {
                        this.displayBounds();
                }
        }
        
        displayBounds() {
                return;
        }
}