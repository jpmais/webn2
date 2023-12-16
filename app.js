const port = 8087;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var homeRouter = require("./routes/home");
var dbzRouter = require("./routes/dbz");
var loginRouter = require("./routes/login");
var loginautRouter = require("./routes/loginaut");
var logincardRouter = require("./routes/logincad");
var narutoRouter = require("./routes/naruto");
var onepieceRouter = require("./routes/onepiece");
var createRouter = require("./routes/create");
var autenticarRouter = require("./routes/autenticar");

var app = express();

app.use(express.static("public"));
app.use("/static", express.static("public"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/dbz", dbzRouter);
app.use("/naruto", narutoRouter);
app.use("/login", loginRouter);
app.use("/login/autenticar", loginautRouter);
app.use("/login/cadastro", logincardRouter);
app.use("/onepiece", onepieceRouter);
app.use("/create", createRouter);
app.use("/autenticar", autenticarRouter);

app.listen(8087, () => {
  console.log("Servidor está ouvindo na porta 8087");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
