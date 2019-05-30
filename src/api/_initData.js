const _initData =()=>(
    fetch("http://192.168.1.18:8888/api/")
        .then(res => res.json())
)
export default _initData