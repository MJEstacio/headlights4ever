function User(username, email) {
  this.username = username;
  this.email = email;
  this.online = false;

}

User.prototype.login = function () {
  if (this.online) {
    console.log(`${this.email} is already logged in`);
  }
  else {
    this.online = true;
    console.log(`${this.email} has logged in`);
  }
};
User.prototype.logout = function () {
  this.online = false;
  console.log(`${this.email} has logged out`);
};

function Admin(...args) {
  User.apply(this, args);
  this.role = 'Super Admin';
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
  users = users.filter(user => {
    return user.email != u.email;
  });
};

var user1 = new User('MJ Estacio', 'mjestacioiii@gmail.com');
var user2 = new User('Rica', 'ricaR@gmail.com');

var admin = new Admin(user1.username, user1.email);

var users = [user1, user2, admin];

console.log(admin);