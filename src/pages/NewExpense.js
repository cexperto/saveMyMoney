const NewExpense = () => {
    const view = `

        <p id="title-name-user"><b>Welcome, </b> Ithzamary</p>

        <section class="content-newexpense">
            <p class="text-instructions text-instructions--expense">Fill the blanks for register a new expense</p>

            <input class="input-expense input" type="number" placeholder="money"></input>
            <input class="input-expense input" type="text" placeholder="where did you spend"></input>
            <input class="input-expense input" type="date" placeholder="date"></input>

            <button class="button save-expense__button">save</button>
        </section>
    `;

    return view;
}

export default NewExpense;