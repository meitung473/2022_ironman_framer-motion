let RELATIVEPATH = /.\/assets\/(.*)/;

export default function importImage(str) {
    let name = str.match(RELATIVEPATH)[1];
    return name;
}
