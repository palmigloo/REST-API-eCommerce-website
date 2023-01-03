const mongoose = require('mongoose');
var debug = require('debug')('question')

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
debug('start question db')
let questionSchema = mongoose.Schema({

  id: {type: Number, required: true, unique: true},
  product_id: Number,
  body: String,
  date_written: Number,
  asker_name: String,
  asker_email: String,
  reported: Number,
  helpful: Number
});

let answerSchema = mongoose.Schema({

  id: {type: Number, required: true, unique: true},
  question_id: Number,
  body: String,
  date_written: Number,
  answerer_name: String,
  answerer_email:String,
  reported: Number,
  helpful: Number,
  urls: Array
});

let metaSchema = mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  question_count: Number,
  answer_count: Number
});

const Question = mongoose.model('questions', questionSchema);
debug('end question db ')
const Answer = mongoose.model('answers', answerSchema);
const AnswerD = mongoose.model('answersds', answerSchema);
const Meta = mongoose.model('metas', metaSchema);
let new_id = 0;
Meta.find({id:1}).then((result) => {
  new_id = result[0].question_count;
})

module.exports.Question = Question;
module.exports.Answer = Answer;
module.exports.Meta = Meta;
module.exports.AnswerD = AnswerD;
module.exports.new_id = new_id;








