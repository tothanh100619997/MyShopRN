const _getListProduct = (id) => (
    fetch("http://192.168.1.18:8888/api/product_by_type.php/?id_type="+id)
        .then(res => res.json())
)
export default _getListProduct