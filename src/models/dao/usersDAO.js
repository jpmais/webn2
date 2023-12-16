class geekDAO {
  static async insertUser(client, user) {
    try {
      const result = await client
        .db("geek")
        .collection("users")
        .insertOne(user);
      return result;
    } catch (err) {
      console.log(err);
      throw err; // Adicione um throw para propagar o erro
    } finally {
      await client.close();
    }
  }

  static async getUserByEmail(client, email) {
    try {
      const result = await client
        .db("geek")
        .collection("users")
        .findOne({ email: email });
      return result;
    } catch (err) {
      console.log(err);
      throw err; // Adicione um throw para propagar o erro
    }
  }

  static async getPersonagensOnePiece(client) {
    try {
      const result = await client
        .db("geek")
        .collection("personagens")
        .find({anime: 'onepiece' });
      return await result.toArray();
    } catch (err) {
      console.log(err);
      throw err; // Adicione um throw para propagar o erro
    }
  }
}

module.exports = geekDAO;
