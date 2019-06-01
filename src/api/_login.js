const _signIn = (email, password) => (
    fetch('http://192.168.1.18:8888/api/login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
);

module.exports = _signIn;