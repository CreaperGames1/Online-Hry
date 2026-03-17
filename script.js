// SNOW
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 3 + 2;
  const speed = Math.random() * 1 + 0.5;
  snowflakes.push({x, y, radius, speed});
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();
  snowflakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
  });
  ctx.fill();
  moveSnowflakes();
}

function moveSnowflakes() {
  snowflakes.forEach(f => {
    f.y += f.speed;
    if (f.y > canvas.height) {
      f.y = 0;
      f.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawSnowflakes();
  requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) createSnowflakes();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// LOGIN / REGISTRATION
function openLogin() { document.getElementById('loginPopup').style.display = 'flex'; }
function closeLogin() { document.getElementById('loginPopup').style.display = 'none'; }
function openRegister() { document.getElementById('registerPopup').style.display = 'flex'; closeLogin(); }
function closeRegister() { document.getElementById('registerPopup').style.display = 'none'; }

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('loginMessage');

  if (username && password) {
    message.style.color = 'green';
    message.innerText = 'Login successful!';
    document.getElementById('welcomeMessage').innerText = `Welcome ${username}`;
    document.querySelector('.login-btn').style.display = 'none';
    document.querySelector('.register-btn').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
    setTimeout(closeLogin, 500);
  } else {
    message.style.color = 'red';
    message.innerText = 'Please enter username and password!';
  }
}

function register() {
  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const message = document.getElementById('registerMessage');

  if (newUsername && newPassword) {
    message.style.color = 'green';
    message.innerText = 'Registration successful! You can now log in.';
    setTimeout(closeRegister, 1000);
  } else {
    message.style.color = 'red';
    message.innerText = 'Please fill in all fields!';
  }
}

function logout() {
  document.getElementById('welcomeMessage').innerText = '';
  document.querySelector('.login-btn').style.display = 'block';
  document.querySelector('.register-btn').style.display = 'block';
  document.getElementById('logoutBtn').style.display = 'none';
}
