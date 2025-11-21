import React from 'react';
function JavaTaskFinal() {
    return (
    <div>
        <h3 className='Headline'>Final Project</h3>
        <p className='TextContents'>
            Finally, there's the java project. In this project, we had to create a program which allows its user to create and manage diaries. It tests out code quality, and understanding of different programming concepts and objects, as well as our ability to write reports.
            <br /><br />For the sake of mental stimulation, I decided to implement encryption functionality, and to save data in a database. By doing this I taught myself how to create, modify, read and maintain a h2 database, and about how to implement encryption algorithms in a secure way. Previously, I've only looked into how AES and RSA encryption works, and barely touched on how it can be implemented to encrypt and decypt something, but my perfectionist drive compulsed me to implement secure solutions for the encryption of the diaries. This includes never saving the password as a variable, but instead only taking it as an input. I also learnt how to best implement hashing, and how shucking can be used to remove the outer layer of hashing to get at the less safe pre-hashed password. The most useful trick I learnt was of how to effectively handle randomized salt and initiation vector data. It involved appending bytes about the length of the bytes to be appended, the length of the salt, and the iteration count, salt and IV bytes themselves. In encryption, randomized salt and IV is important to prevent rainbowtable attacks, as well as other risks borne from people having the same passwords.
        </p>
    </div>
    );
}

export default JavaTaskFinal;