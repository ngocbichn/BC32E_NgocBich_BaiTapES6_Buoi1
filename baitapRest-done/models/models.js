class Lop1 {
    constructor(diemToan, diemLy, diemHoa,) {
        this.diemToan = diemToan
        this.diemLy = diemLy
        this.diemHoa = diemHoa
        this.averageScoreLop1 = this.tinhDTB()
    }
    tinhDTB() {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }
}