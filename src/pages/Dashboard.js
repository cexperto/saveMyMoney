const Dashboard = () => {
    const view = `
        <div class='cards-header'>
            <p id="title-name-user"><b>Welcome, </b> Ithzamary</p>
            <section class="card-total">
                <p class="white-text card-total__text">Montly expenses</p>
                <p class="card-total__total-expenses">$2,000.00</p>
                <p class="white-text card-total__footer-text">your last expense was on: <span><span></p>
            </section>
            <section class="card-user">
                <img class="img-user" src="/src/img/profile-w.png"></img>
                <p class="black-text">User name</p>
            </section>
        <div>
        <section class="search-expense">
            <p class="text-instructions">Search your expense per date</p>
            <input class="input-expense" type="date"></input>
            <button class="button search-expense__button">Buscar</button>
        </section>

        <ul class="list-expenses">
            <li class="item">
                <p>date: 16/04/2021</p>
                <p>expense: $500.00</p>
                <p>where: Costco</p>
            </li>
        </ul>
    `;

    return view;
}

export default Dashboard;