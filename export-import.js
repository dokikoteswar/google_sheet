function exportData(){
    let filData = JSON.stringify(state);
    let blob = new Blob([filData],{type: "aplication/json"})
    let url =URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download ="sheet.json";
    link.click();
}