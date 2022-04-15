const login = () => {
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  console.log(user.value, password.value)

  if (!user.value || !password.value) {
    alert('Por favor, complete todos los campos')
    return
  }

  if (password.value.length < 8) {
    alert('Ingrese una contraseña más larga')
    return
  }

  window.location.href = '/index.html'
}