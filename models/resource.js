/*
  Resource {
    id: UUID: String,
    title: String,
    description: String,
    url: String,
    referrer: String 
    credit: String / User ID ?,
    published: Date: String,
    created: Date: String,
    type: String,
    tags: []
  }
*/

const resource = (sequelize, DataTypes) => {
	const Resource = sequelize.define("resource", {
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		url: DataTypes.STRING,
		referrer: DataTypes.STRING,
		credit: DataTypes.STRING,
		published: DataTypes.DATE,
		created: DataTypes.DATE,
		type: DataTypes.STRING
	});

	return Resource;
};

export default resource;
