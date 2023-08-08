function skillsMember(){
    return{
        restrict:'E',
        templateurl:'modules/skills/views/skillsMember.html',
        controller: 'skillmembercontroller',
        controlleras:'vm',
        bindtocontroller:true,
        scope:{
            member:'='
        }
    };
}