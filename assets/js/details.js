/// NUMBER INPUT INCREMENT AND DECREMENT FUNCTIONS
        function increment() {
            document.getElementById('qty').stepUp();
        }

        function decrement() {
            document.getElementById('qty').stepDown();
        }

        // SELECT2 DROPDOWN JS HERE

        $('#titleSelect').select2({
            placeholder: "",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });
        $('#driversAge').select2({
            placeholder: "",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });
        $('#countryName').select2({
            placeholder: "Select country",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });
        $('#typeOfCar').select2({
            placeholder: "Choose an option",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });
        $('#selectAirline').select2({
            placeholder: "",
            allowClear: false,
            minimumResultsForSearch: Infinity
        });

        // AIRLINE DETAIL TOGGLE HERE JS
        const btn = document.querySelector('.add-flight-btn');
        const details = document.getElementById('flightDetails');

        btn.addEventListener('click', function () {
            details.classList.toggle('d-none');
            debugger;
            if (details.classList.contains('d-none')) {
                btn.innerHTML = btn.innerHTML.replace('Hide flight details', 'Add flight details <span>(optional)</span>');
            } else {
                btn.innerHTML = btn.innerHTML.replace('Add flight details <span>(optional)</span>', 'Hide flight details');
            }
        });

        // CUSTOM HIDE SHOW BOX

        const btnOne = document.getElementById('btnOne');
        const btnTwo = document.getElementById('btnTwo');
        const btnThree = document.getElementById('btnThree');

        const divOne = document.getElementById('divOne');
        const divTwo = document.getElementById('divTwo');

        // Button 2 click → show second box
        btnTwo.addEventListener('click', () => {
            divOne.classList.add('d-none');
            divTwo.classList.remove('d-none');

            btnOne.classList.add('d-none');
            btnTwo.classList.add('d-none');
            btnThree.classList.remove('d-none');
        });

        // Button 3 click → back to first box
        btnThree.addEventListener('click', () => {
            divTwo.classList.add('d-none');
            divOne.classList.remove('d-none');

            btnThree.classList.add('d-none');
            btnOne.classList.remove('d-none');
            btnTwo.classList.remove('d-none');
        });


        // BOOTSTRAP TOOLTIPS
        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );

        [...tooltipTriggerList].forEach((el) => {
            const tooltip = new bootstrap.Tooltip(el, {
                customClass: 'custom-tooltip'
            });
        });