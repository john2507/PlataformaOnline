const User = require('../models/User')

module.exports = {

  async index(req, res){

    try {
      const users = await User.findAll();

      if(users == '' && users == null ){
        res.status(200).json({messege: 'Não tem nenhum usuario no banco'})
      }
      
      return res.status(200).json({messege: users})
    } catch (error) {    
      return res.json({messege: 'Erro a pesquisar Usuarios'})
  
    }
    
    
    




  },
  async store(req, res){

  },
  async update(req, res){

  },
  async delete(req, res){

  },

}