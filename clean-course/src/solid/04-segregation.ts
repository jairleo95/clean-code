interface Bird {
    eat(): void;
}
interface FlyingBird{
    fly(): void;
}
interface RunningBird{
    run(): void;
}
interface SwimmerBird{
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat(){}
}

class Huminbird implements Bird, FlyingBird,RunningBird{
    public fly() {}
    public eat(){}
    public run(){}
}

class Ostrich implements Bird, RunningBird{
    public eat(){}
    public run(){}
}

class Pinguin implements Bird, RunningBird, SwimmerBird{
    public eat(){}
    public run(){}
    public swim(){}
}