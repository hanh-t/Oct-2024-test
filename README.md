# Oct 2024 Test

# Solution

This was the first time for me using NestJS so there was a fair amount of reading and watching videos ahead of starting! I really enjoyed the backend part of the task and spent the majority of my time there learning about NestJS projects, so much so that I did not leave myself enough time to finish the frontend section, and unfortunately ran into a node issue which meant I'm unable to send you the final, completed code for the client but have scaffolded a basic structure using styled-components.

Some thoughts on the backend section and where I see improvements:

- With more time I would have liked to add more tests and TDD the backend process but as it was new to me I had to concentrate on creating the endpoint.
- It's good practice to provide API documentation and I like that NestJS has dedicated support for it through Swagger. I'm currently working with openAPI in a Kotlin project and lilke it. This would be something to add once the number of endpoints grow/if I had more time.
- Data metrics/tooling and error handling are also both very important so could look to incorporate something with a tool like Datadog or Sentry which could monitor for issues and keep logs.

Further thoughts:

- For client-side API consumption, I would have liked to use something like React Query which I'm familiar with and enjoy using because of the way it handles fetching, refetching and caching so well out the box.
- As mentioned above, I ran into a node issue and ran out of time, but if I'd had time to do this justice, I would have used react-query to fetch the data and rendered the correct expression within the returned message to the user.
- I used styled-components in this instance but a design system or perhaps a Storybook package would have sped up creating this and would ensure consistency across products and multi-platform development.
- With more time, more thought would need to be given to how the UI would display on mobile devices and smaller screens. Right now that hasn't been included.
- Tests are also a given here - either through end-to-end with something like Playwright or unit and integration tests with React Testing Library or similar.

I feel the test was fair with everyone being given the same amount of time to complete it and I really enjoyed trying out something completely new - even if I ended up fluffing up my strongest area! Thank you!
