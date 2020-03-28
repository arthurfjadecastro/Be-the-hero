const connection = require("../database/connection");

const ITEMS_PER_PAGE = 5;

module.exports = {
  //Create incident
  async create(request, response) {
    const { title, description } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      ong_id
    });

    return response.json({ id });
  },
  //List all incidents
  async index(request, response) {
    const { page = 1 } = request.query;
    const [count] = await connection("incidents").count();
    const incidents = await connection("incidents")
      .join("ongs", "ong_id", "=", "incidents.ong_id")
      .limit(ITEMS_PER_PAGE)
      .offset((page - 1) * ITEMS_PER_PAGE)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);
    response.header("X-Total-Count", count["count(*)"]);
    return response.json(incidents);
  },
  //Delete specific incident -
  //Note: use route param to get incident id
  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.header.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id.id !== ong_id) {
      return response.status(401).json({ error: "Operation of not permitted" });
    }
    await await connection("incidents")
      .where("id", id)
      .delete();
    return response.status(204).send();
  }
};
