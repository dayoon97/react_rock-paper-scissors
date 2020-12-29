function Random(){
    const random = Math.floor(Math.random() * 3) + 1;

    console.log(random);
    return random;
};

export default Random;