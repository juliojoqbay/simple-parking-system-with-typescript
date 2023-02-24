(function () {
    var _a;
    var $ = function (query) {
        return document.querySelector(query);
    };
    function parking() {
        var read = function () {
        };
        var add = function (vehicule) {
            var _a;
            var row = document.createElement("tr");
            row.innerHTML = "\n            <td>".concat(vehicule.model, "</td>\n            <td>").concat(vehicule.plate, "</td>\n            <td>").concat(vehicule.entry, "</td>\n            <td>\n                <button class=\"delete\" data-placa=\"").concat(vehicule.plate, ">x</button>\n            </td>\n            ");
            (_a = $("#parking")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        };
        var remove = function () { };
        var save = function () { };
        var render = function () { };
        return { read: read, add: add, remove: remove, save: save, render: render };
    }
    (_a = $("#register")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;
        var model = (_a = $('#model')) === null || _a === void 0 ? void 0 : _a.value;
        var plate = (_b = $('#plate')) === null || _b === void 0 ? void 0 : _b.value;
        if (!model || !plate) {
            alert("The fields are requireds");
            return;
        }
        parking().add({ model: model, plate: plate, entry: new Date() });
    });
})();
