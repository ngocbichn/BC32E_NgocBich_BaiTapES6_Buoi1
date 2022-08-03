const averageScore = (...rest) => {
    let total = 0;
    for (const value of rest) {
        total += value;
    }
    return total / rest.length;
}

const getElement = (id) => {
    return document.getElementById(id);
}

getElement('btnKhoi1').onclick = () => {
    //input
    const diemToan = Number(getElement('inpToan').value);
    const diemLy = Number(getElement('inpLy').value);
    const diemHoa = Number(getElement('inpHoa').value);
    //progress
    const dtb = averageScore(diemToan, diemLy, diemHoa);
    //output
    getElement('tbKhoi1').innerHTML = dtb;
}

getElement('btnKhoi2').onclick = () => {
    //input
    const diemVan = Number(getElement('inpVan').value);
    const diemSu = Number(getElement('inpSu').value);
    const diemDia = Number(getElement('inpDia').value);
    const diemAnh = Number(getElement('inpEnglish').value);
    //progress
    const dtb = averageScore(diemVan, diemSu, diemDia, diemAnh);
    //output
    getElement('tbKhoi2').innerHTML = dtb;
}