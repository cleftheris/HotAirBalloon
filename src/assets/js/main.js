function toInteger(input) {
    if (typeof num1 == 'number') {
        return input;
    } else {
        return parseInt((input || '').toString());
    }
}
function Binding(b) {
    _this = this
    this.elementBindings = []
    this.value = b.object[b.property]
    this.valueGetter = function () {
        return _this.value;
    }
    this.valueSetter = function (val) {
        _this.value = val
        for (var i = 0; i < _this.elementBindings.length; i++) {
            var binding = _this.elementBindings[i]
            binding.element[binding.attribute] = val
        }
    }
    this.addBinding = function (element, attribute, event) {
        var binding = {
            element: element,
            attribute: attribute
        }
        if (event) {
            element.addEventListener(event, function (event) {
                _this.valueSetter(element[attribute]);
            })
            binding.event = event
        }
        this.elementBindings.push(binding)
        element[attribute] = _this.value
        return _this
    }

    Object.defineProperty(b.object, b.property, {
        get: this.valueGetter,
        set: this.valueSetter
    });

    b.object[b.property] = this.value;
};
var model = {
    start: 11,
    target: 76,
    amount: 0,
    solution: function () {
        return toInteger(this.target) - toInteger(this.start);
    },
    position: function () {
        return toInteger(this.start) + toInteger(this.amount);
    }
};
(function () {
    new Binding({ object: model, property: "start" })
        .addBinding(document.getElementById("start_text"), "value", "keyup");
    new Binding({ object: model, property: "target" })
        .addBinding(document.getElementById("target_text"), "value", "keyup");
    new Binding({ object: model, property: "amount" })
        .addBinding(document.getElementById("amount_text"), "value", "keyup");
    new Binding({ object: model, property: "position" })
        .addBinding(document.getElementById("current_position"), "innerHTML");
})();