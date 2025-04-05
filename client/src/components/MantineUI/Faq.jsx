import { Accordion, Container, Grid, Image, Title } from "@mantine/core";
import image from "../../img/faq.svg";
import classes from "./Faq.module.scss";
import { div } from "motion/react-client";

const placeholder = "Insert text here";

export default function Faq() {
  return (
    <div className={classes.wrapper}>
      <Grid id="faq-grid" gutter={50}>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className="w-full flex items-center justify-center"
        >
          <Image
            src={image}
            alt="Frequently Asked Questions"
            className="w-full h-auto"
          />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          className="flex items-center justify-center"
        >
          <div className="w-full">
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>
                  How can I reset my password?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>
                  Can I create more that one account?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>
                  How can I subscribe to monthly newsletter?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}
