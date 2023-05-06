class Profile{
    constructor(education, workExperience, fieldOfWork, requirements,FDMRole){
        this.educaton = education;
        this.workExperience = workExperience;
        this.fieldOfWork = fieldOfWork;
        this.requirements= requirements;
        this.FDMRole = FDMRole;
    }

    //updates the information on a profile
    updateProfile(education, workExperience, fieldOfWork, requirements, FDMRole){
        this.educaton = education;
        this.workExperience = workExperience;
        this.fieldOfWork = fieldOfWork;
        this.requirements= requirements        
        this.FDMRole = FDMRole;
        ;

    }

    //not sure what we agreed on this function doing
    report(){

    }

    //stores the amounts of reports on a profile
    setReportCount(count){
        this.reportCount = count
    }
}