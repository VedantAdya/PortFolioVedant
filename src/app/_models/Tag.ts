export class Tag{
    static readonly PYTHON=new Tag('Python','red');
    static readonly FLASK=new Tag('Flask','darkred');
    static readonly JAVA=new Tag('JAVA','red');
    static readonly SPRINGBOOT=new Tag('SPRINGBOOT','darkred');
    static readonly C=new Tag('C','red');
    static readonly c=new Tag('c','darkred');
    static readonly CPP=new Tag('CPP','red');
    static readonly cpp=new Tag('cpp','darkred');
    static readonly ANGULAR=new Tag('ANGULAR','darkred');
private constructor(private readonly key:string,public readonly color:string){

        }
    toString(){
    return this.key;
        }
}