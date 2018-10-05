showStartModel();

function showStartModel() {
    if(localStorage.getItem('modalYesBtn')!=1) {
        setTimeout(function () {
            $('#exampleModal').modal('show');
            $('#modalYesBtn').on('click', function () {
                localStorage.setItem("modalYesBtn", 1);
                $('#exampleModal').modal('hide');
            });
        }, 2111);
    }
}