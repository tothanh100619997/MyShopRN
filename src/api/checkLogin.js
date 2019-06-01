const checkLogin = (token) => (
    fetch('http://192.168.1.18:8888/api/check_login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.json())
);

module.exports = checkLogin;