module.exports = (req, res, next) => {

  if (req.method === 'GET' && req.path === '/login') {
    
    return res.sendFile(`${__dirname}/index.html`);

  }

  if (req.method === 'POST' && req.path === '/reset') {
    req.app.db.setState({
      todos: []
    });

    return res.sendStatus(200);
  }

  if (req.method === 'DELETE' && req.path === '/todos') {
    req.app.db.setState({
      todos: []
    });

    return res.sendStatus(200);
  }

  if (req.method === 'POST' && req.path === '/login') {

    if (req.body.username === 'admin' && req.body.password === 'admin') {

      return res.sendStatus(200);

    } else {

      return res.sendStatus(401);

    }

  }
  
  next();
    
};