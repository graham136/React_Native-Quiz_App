import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { BackHandler } from 'react-native';

// Table Screen. Main engine used to render the quiz.
class TableScreen extends React.Component {  
  constructor(props) {
    super(props);

    this.state = {
      answered: 1,
      correct: 0,
      maxanswered: 3,
      button1_text: 'start',
      button2_text: 'start',
      button3_text: 'start',
      multiplyTable: this.props.route.params.multiplyTable,
      multiply: 1,
      question: "Press start to begin",
      correctAnswer: 0
    };
  }


  render() {

    return (
      <View>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Multiplication</Text>
          <Text style={styles.headerText}>Tables</Text>
          <Text style={styles.questionText}>{this.state.question}</Text>
          <View style={styles.button_2}>
            <Button color='green' title={this.state.button1_text} onPress={() => { this.nextQuestion(1) }} />
          </View>
          <View style={styles.button_2}>
            <Button color='green' title={this.state.button2_text} onPress={() => { this.nextQuestion(2) }} />
          </View>
          <View style={styles.button_2}>
            <Button color='green' title={this.state.button3_text} onPress={() => { this.nextQuestion(3) }} />
          </View>
          <View style={styles.button_2}>
            <Button title='Home' onPress={() => { BackHandler.exitApp(); }} />
          </View>
        </View>
      </View>
    );
  };



  nextQuestion = (buttonpressed) => {

    successAlert = (message) => {
      Alert.alert(
        "Congratulations",
        message,
        [
          { text: "OK", }
        ],
        { cancelable: false }
      );
    };

    failAlert = (message) => {
      Alert.alert(
        "Sorry",
        message,
        [
          { text: "OK", }
        ],
        { cancelable: false }
      );
    };

    doneAlert = (message) => {
      Alert.alert(
        "Nicely Done!",
        message,
        [
          { text: "OK", onPress: () => {  this.props.navigation.goBack(null); }}
        ],
        { cancelable: false }
      );
    };


    if (this.state.button1_text == 'start') {

      var multiply = Math.floor(Math.random() * 12) + 1;
      var order = Math.floor(Math.random() * 3) + 1;
      var answer1 = this.state.multiplyTable * (multiply - 1);
      var answer2 = this.state.multiplyTable * multiply;
      var answer3 = this.state.multiplyTable * (multiply + 1);
      var correctAnswer = this.state.multiplyTable * multiply;
      var answered = this.state.answered;
      var question = this.state.multiplyTable + " x " + multiply + " = ??";
      var correct = this.state.correct;

      if (order == 1) {
        this.setState(state => {

          return {
            button1_text: answer1.toString(),
            button2_text: answer2.toString(),
            button3_text: answer3.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }

      if (order == 2) {
        this.setState(state => {
          return {
            button1_text: answer2.toString(),
            button2_text: answer3.toString(),
            button3_text: answer1.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }

      if (order == 3) {
        this.setState(state => {
          return {
            button1_text: answer3.toString(),
            button2_text: answer1.toString(),
            button3_text: answer2.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }

      this.setState(state => {
        return {
          correct: correct,
          answered: answered,
          multiply: multiply,
          correctAnswer: correctAnswer
        }
      });

    }
    else {
      var message = "The correct answer is " + this.state.multiplyTable + " x " + this.state.multiply + " = " + this.state.correctAnswer;
      var correct = this.state.correct;
      var answered = this.state.answered;

      if (buttonpressed == 1 && this.state.button1_text == this.state.correctAnswer.toString()) {
        successAlert(message);
        correct++;
      }
      else if (buttonpressed == 2 && this.state.button2_text == this.state.correctAnswer.toString()) {
        successAlert(message);
        correct++;
      }
      else if (buttonpressed == 3 && this.state.button3_text == this.state.correctAnswer.toString()) {
        successAlert(message);
        correct++;
      }
      else {
        failAlert(message);
      }



      if (answered == this.state.maxanswered) {
        var message = "You have " + this.state.correct + " out of " + this.state.maxanswered;
        doneAlert(message);
      }

      answered = answered + 1;

      var multiply = Math.floor(Math.random() * 12) + 1;
      var order = Math.floor(Math.random() * 3) + 1;
      var answer1 = this.state.multiplyTable * (multiply - 1);
      var answer2 = this.state.multiplyTable * multiply;
      var answer3 = this.state.multiplyTable * (multiply + 1);
      var correctAnswer = this.state.multiplyTable * multiply;
      var question = this.state.multiplyTable + " x " + multiply + " = ??";

      if (order == 1) {
        this.setState(state => {

          return {
            button1_text: answer1.toString(),
            button2_text: answer2.toString(),
            button3_text: answer3.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }

      if (order == 2) {
        this.setState(state => {
          return {
            button1_text: answer2.toString(),
            button2_text: answer3.toString(),
            button3_text: answer1.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }

      if (order == 3) {
        this.setState(state => {
          return {
            button1_text: answer3.toString(),
            button2_text: answer1.toString(),
            button3_text: answer2.toString(),
            question: question,
            correctAnswer: correctAnswer
          }
        });
      }


      this.setState(state => {
        return {
          correct: correct,
          answered: answered,
          multiply: multiply,
          correctAnswer: correctAnswer
        }
      });
    }
  };
}


export default TableScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderStyle: 'dashed',
    margin: 20,
    marginBottom: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  contentContainer: {
    paddingTop: 30,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 30,
    color: 'dodgerblue',
    textAlign: 'center',
    padding: 2,
  },

  questionText: {
    fontSize: 20,
    color: 'dodgerblue',
    textAlign: 'center',
  },
  button_1: {
    width: '20%',
    height: 30,
    margin: 5,
    marginTop: 5,
    marginBottom: 25,
    alignSelf: 'center',
  },
  button_2: {
    width: '90%',
    height: 30,
    margin: 5,
    marginTop: 5,
    marginBottom: 25,
    alignSelf: 'center',
  },
});