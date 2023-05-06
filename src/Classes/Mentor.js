class Mentor extends User{

    //View a selected mentee's profile
    viewMenteeProfile(mentee){

    }

    //Find a match and return an array of compatible mentees
    findMatch(){
        return filteredMentees;
    }


    //Send a match request to selected mentee
    sendMatchRequest(){

    }

    //Give feedback (on the app? or on the mentee?)
    giveFeedback(){
        return feedback;
    }


    //unmatch from your current mentee
    unmatch(){

    }

    //accept a mentees match request
    acceptMatch(){
        return success;
    }

    //create a curriculum for your mentee
    createCurriculum(program){

    }

    //setter to add a mentee attribute to a mentor object
    setMentee(mentee){
        this.mentee = mentee;
    }

    //getter for mentee attribute
    getMentee(){
        return this.mentee;
    }

    //setter for profile attribute
    setProfile(education, workExperience, fieldOfWork, requirements){
        this.profile = new Profile(education, workExperience, fieldOfWork, requirements);
    }

    //getter for profile attribute
    getProfile(){
        return this.profile;
    }
}