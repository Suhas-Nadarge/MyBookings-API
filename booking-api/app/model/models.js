const mongoose = require('mongoose');

    var schema = mongoose.Schema(
        {
                name:String,
                password:String,  
                email: String,
                mobile: String,
        },
        { timestamps: true }
      );
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
      const User = mongoose.model("Users", schema);
      module.exports = User;
  
      