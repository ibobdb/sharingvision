const { Article } = require('../models');
const { pagination } = require('../lib/pagination');
const Response = require('../lib/response');
module.exports = {
  get: async (req, res, next) => {
    const { limit = 10, page = 1, search, status = 'PUBLISH' } = req.query;
    try {
      const offset = (page - 1) * limit;
      const whereClause = {
        status: status
      };
      const response = await Article.findAndCountAll({
        where: whereClause,
        limit: parseInt(limit),
        offset: offset,
        order: [['createdAt', 'ASC']]
      });
      const results = pagination(limit, page, response);
      res.json(Response.success(results));
    } catch (error) {
      res.json(Response.error());
    }
  },
  post: async (req, res) => {
    const data = req.body;
    try {
      const response = await Article.create(data);
      res.json(Response.success(response));
    } catch (error) {
      res.json(Response.error(error));
    }
  },
  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await Article.findOne({
        where: {
          id: id
        }
      })
      res.json(Response.success(response));
    } catch (error) {
      res.json(Response.error(error));
    }
  },
  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
      const response = await Article.update(data, {
        where: {
          id: id
        }
      })
      res.json(Response.success(response))
    } catch (error) {
      res.json(Response.error());
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const response = await Article.destroy({
        where: {
          id: id
        }
      })
      res.json(Response.success(response))
    } catch (error) {
      res.json(Response.error());
    }
  }
}
