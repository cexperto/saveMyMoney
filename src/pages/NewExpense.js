const NewExpense = () => {
    const view = `
        <p class="black-text">Welcome <span>User</span></p>

        <p class="black-text">Fill the blanks for register a new expense</p>

        <input type="number" placeholder="money"></input>
        <input type="text" placeholder="where did you spend"></input>
        <input type="date" placeholder="date"></input>

        <button>save</button>
    `;

    return view;
}

export default NewExpense;