const _register = (email, name, password) => (
    fetch('http://192.168.1.18:8888/api/register.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, name, password })
        })
        .then(res => res.text())
);

module.exports = _register;