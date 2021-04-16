const Dashboard = () => {
    const view = `
        <section class="card-total">
            <p class="white-text">Montly expenses</p>
            <p class="total-expenses"></p>
            <p class="white-text">your last expense was on: <span><span></p>
        </section>
        <section class="card-user">
            <img class="img-user"></img>
            <p class="black-text">User name</p>
        </section>

        <p class="black-text">Search your expense per date</p>
        <input type="calendar"></input>
        <button>Buscar</button>

        <ul class="list-expenses">
            <li class="item">
                <p>date: </p>
                <p>expense: </p>
                <p>where: </p>
            </li>
        </ul>
    `;

    return view;
}

export default Dashboard;