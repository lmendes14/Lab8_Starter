# Lab 8 - Starter

Name: Lorenzo Mendes 
Partners: None

1. I would fit my automated tests within a Github action that runs whenever code is pushed. I would do this to ensure tests are being run on the new code. If we manually run them locally, there's a risk that the person writing the code forgets to test before pushing. Furthermore, running them after all development is completed is extremely risky since if there's a problem with the code, you have to check all of the work completed during development.

2. It really depends. If the function returns an output that directly affects user experience, then yes, e2e testing should check this. If the function is entirely backend, and doesn't affect user experience, then e2e testing wouldn't check it.

3. I would not use a unit test to test the "message" feature. Since we cannot use unit testing to test how this feature interacts on an application level, then we cannot test the "message" feature.

4. I would use a unit test to test the "max message length". This is because we could easily test this by feeding it messages of different lengths, and this feature doesn't interact much with other features at all.