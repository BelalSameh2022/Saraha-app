const home = (req, res) => {
  res.render("home", { session: req.session });
};

export { home };
