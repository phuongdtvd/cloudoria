class Quest {
    constructor(name, testFunction, questGiver, rewards){ //Ran once you initalize class
        this.name = name;
        this.testFunction = testFunction;
        this.questGiver = questGiver;
        this.rewards = rewards;
    }

    GetQuestName(){
        return this.name;
    }

    GetQuestGive(){
        return this.questGiver;
    }

    getRewards(){
        return this.rewards;
    }

    GetQuestCompletion(){
        return this.testFunction();
    }
}

module.exports = Quest