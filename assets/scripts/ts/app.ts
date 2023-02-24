
interface Vehicule {
    model: string,
    plate: string,
    entry: Date;
}

(function() {
    const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

    function parking() {
        var read = () => {

        }

        var add = (vehicule: Vehicule) => {
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${vehicule.model}</td>
            <td>${vehicule.plate}</td>
            <td>${vehicule.entry}</td>
            <td>
                <button class="delete" data-placa="${vehicule.plate}>x</button>
            </td>
            `;

            $("#parking")?.appendChild(row);
        }

        var remove = () => {}

        var save = () => {}

        var render = () => {}

        return { read, add, remove, save, render };
    }

    $("#register")?.addEventListener("click", () => {
        const model = $('#model')?.value;
        const plate = $('#plate')?.value;

        if (!model || !plate) {
            alert("The fields are requireds");
            return;
        }

        parking().add({ model, plate, entry: new Date()} );
    });
})();