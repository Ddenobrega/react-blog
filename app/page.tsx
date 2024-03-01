import Image from "next/image";

import image1 from "../public/images/test1.png";
import image2 from "../public/images/test2.png";

export default function Page() {
  return (
    <main className="py-8 bg-[#0e0e0e] leading-6 tracking-wide font-light text-[#eee] flex flex-col gap-3 lg:px-[25%] px-10">
      <h1 className="font-bold text-2xl">Automated Usability Testing</h1>
      <i>Author: Daryl DeNobrega</i>
      <p className="">
        Evaluating how users interact with a website is crucial for its success.
        This analysis goes beyond simply observing button clicks; it requires an
        understanding of the user journey and its design. In this exploration,
        we will delve into automated usability testing tools, examining their
        role in identifying potential issues and fostering a positive user
        experience.
      </p>
      <p>
        In today’s digital landscape, ensuring a website provides a clear and
        accessible user experience (UX) is essential for success. To achieve
        this, analyzing user interaction and identifying potential roadblocks is
        crucial. This exploration will delve into two prominent tools,
        Lighthouse and WAVE, and their capabilities in assessing website
        usability.
      </p>
      <p>
        We will explore how these tools, despite their distinct approaches,
        offer valuable insights into website functionality and accessibility,
        ultimately contributing to the development of a user-friendly and
        inclusive online experience.
      </p>
      <h2 className="font-bold text-xl pt-4">Why choose these tools?</h2>
      <p>
        Lighthouse offers a broader perspective, encompassing technical SEO,
        performance optimization, and basic accessibility checks. Its results
        focus on improving page load speed, identifying missing alt text for
        images, and suggesting improvements to code structure. In contrast, WAVE
        takes a laser focus on accessibility, highlighting potential violations
        of web accessibility guidelines. It categorizes these issues by severity
        and provides links to specific guidelines for further understanding.
        While offering a broader scope, Lighthouse's accessibility checks are
        not as in-depth as WAVE's.
      </p>
      <p>
        Therefore, it's crucial to utilize these tools in conjunction to gain a
        comprehensive understanding of a website's usability and accessibility.
        Lighthouse sheds light on technical performance and general
        accessibility, while WAVE dives deeper into specific accessibility
        barriers, ultimately contributing to the development of a user-friendly
        and inclusive online experience.
      </p>
      <h2 className="font-bold text-xl pt-4">Wave Test Results</h2>
      <div className=" flex gap-4 flex-wrap items-middle lg:justify-center justify-around">
        <div className="flex flex-col justify-center">
          <Image src={image1} width={600} height={150} alt="test 1" />
          <p className="text-center">
            Image of{" "}
            <a
              className="underline text-red-500"
              href="https://wave.webaim.org/report#/turkeyenonline.uog.edu.gy"
            >
              Wave
            </a>{" "}
            Test Results
          </p>
        </div>
      </div>
      <p>
        Analyzing the provided WAVE report reveals several areas for improvement
        in the website's accessibility. While no contrast errors were detected,
        11 errors were identified, primarily related to missing alternative
        text, fieldset issues, and missing form labels.
      </p>
      <p>
        The absence of alternative text for at least one image presents a
        barrier for users with visual impairments who rely on screen readers.
        Without alternative text describing the image content, these users might
        miss crucial information or find it difficult to understand the
        webpage's overall message.
      </p>
      <p>
        Furthermore, the identified fieldset errors indicate potential problems
        with the structure and labeling of groups of related form elements. This
        could lead to confusion for users trying to navigate and complete the
        form accurately.
      </p>
      <p>
        The missing form labels for five form elements pose another
        accessibility challenge. Users, especially those with vision impairments
        or cognitive disabilities, rely on labels to understand the purpose of
        each form element and provide the necessary information. The absence of
        clear labels can hinder the user's ability to interact with the form
        effectively and potentially lead to frustration and form abandonment.
      </p>
      <p>
        Addressing these accessibility issues is crucial to creating a more
        inclusive and user-friendly experience for everyone. By implementing
        alternative text, ensuring proper fieldset structure, and adding missing
        form labels, the website can significantly improve its accessibility and
        cater to a broader range of users. It's important to note that this
        analysis is based on the limited information in the screenshot, and a
        comprehensive evaluation would require examining the entire WAVE report
        for a complete understanding of the website's accessibility state.
      </p>
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-xl pt-4">Light-house Test Results</h2>
        <Image src={image2} width={1200} height={200} alt="test 1" />
        <p className="text-center">
          Image of <a className="text-red-500 underline">Lighthouse</a> Test
          Results
        </p>
      </div>
      <p>
        The Lighthouse report reveals that while the website scores 60 overall,
        there's room for improvement in key areas.
      </p>
      <p>
        Firstly, the performance score of 81 indicates significant opportunities
        to optimize website speed. This could involve optimizing images,
        reducing the execution time of JavaScript, and improving the efficiency
        of resource loading. the accessibility score is near borderline at 67,
        it's crucial to analyze the specific results to ensure critical
        accessibility barriers are fixed.
      </p>
      <p>
        The best practices score of 96 although exceptional suggests potential
        for code structure improvement and adherence to established web
        development best practices. This might involve minifying unused code,
        leveraging browser caching, and following recommended code organization
        standards.
      </p>
      <p>
        Lighthouse also highlights specific metrics like Largest Contentful
        Paint (LCP), indicating a delay in loading the main content, and First
        Contentful Paint (FCP), suggesting room for improvement in displaying
        the initial content faster.
      </p>
      <p>
        Analyzing the Wave and Lighthouse test results provides a comprehensive
        overview of the website's current state. The Wave report identifies
        accessibility issues, particularly regarding alternative text, fieldset
        structure, and form labels, highlighting areas where users with
        disabilities may encounter barriers. Conversely, the Lighthouse report
        delves into broader performance aspects, such as website speed
        optimization and adherence to best practices in web development. While
        Wave focuses on accessibility, Lighthouse offers insights into overall
        performance and code quality. Together, these reports offer a holistic
        perspective, ensuring that the website not only meets accessibility
        standards but also delivers an optimal user experience in terms of
        speed, efficiency, and adherence to industry best practices. By
        addressing the recommendations from both reports, the website can
        enhance its accessibility while simultaneously improving its performance
        and adhering to established web development standards.
      </p>
      <h2 className="text-xl font-bold">
        How These Tests Complement Each Other
      </h2>
      <p>
        The Wave report identifies accessibility issues, particularly regarding
        alternative text, fieldset structure, and form labels, highlighting
        areas where users with disabilities may encounter barriers. Conversely,
        the Lighthouse report delves into broader performance aspects, such as
        website speed optimization and adherence to best practices in web
        development. While Wave focuses on accessibility, Lighthouse offers
        insights into overall performance and code quality. Together, these
        reports offer a holistic perspective, ensuring that the website not only
        meets accessibility standards but also delivers an optimal user
        experience in terms of speed, efficiency, and adherence to industry best
        practices.
      </p>
      <p>
        The synergy between the Wave and Lighthouse tests lies in their
        complementary focus on different aspects of website evaluation. Wave
        specializes in accessibility testing, meticulously identifying issues
        that might impede users with disabilities from accessing and navigating
        the website effectively. Its analysis of alternative text, form labels,
        and structural elements ensures that the website conforms to
        accessibility standards, fostering inclusivity for all users. On the
        other hand, Lighthouse provides a broader assessment encompassing
        performance metrics, best practices, and optimization opportunities. By
        evaluating factors like website speed, code efficiency, and adherence to
        industry standards, Lighthouse offers insights into overall website
        health and user experience optimization. Together, these tests form a
        robust evaluation framework that addresses both accessibility and
        performance aspects comprehensively. This collaboration ensures that the
        website not only meets accessibility guidelines but also delivers a
        seamless, efficient, and user-friendly experience for all visitors.
      </p>

      <h2 className="text-2xl font-bold">Notable References</h2>
      <ul className="flex gap-4 px-4 list-disc flex-col">
        <li className=" ">
          Nielsen, J. (1994). <i>Usability Engineering.</i> Morgan Kaufmann.
        </li>
        <li>
          WAVE Web Accessibility Evaluation Tools. (n.d.).{" "}
          <a className="underline text-red-500" href="https://wave.webaim.org/">
            Source
          </a>
        </li>
        <li>
          Overview. (2016, September 27). Chrome for Developers.{" "}
          <a
            href="https://developer.chrome.com/docs/lighthouse/overview"
            className="underline text-red-500"
          >
            Source
          </a>
        </li>
      </ul>
    </main>
  );
}
