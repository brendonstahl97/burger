$(() => {
    $(".change-devoured").on("click", event => {
        const id = $(event.target).data("id");
        let newEat = $(event.target).data("neweat");

        const newEatState = {
            devoured: newEat
        }

        console.log(id);
        console.log("new Eat: ", newEat);

        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
            data: newEatState
        }).then(
            () => {
                console.log(`BURGER ${id} HAS BEEN EATEN`);
                location.reload();
            }
        )
    })

    $(".burgerBtn").on("click", event => {
        const newBurger = {
            name: $(".burgerInput").val().trim()
        }

        $.ajax(`/api/burgers/`, {
            type: "POST",
            data: newBurger
        }).then(result => {
            location.reload();
        })
    })
})