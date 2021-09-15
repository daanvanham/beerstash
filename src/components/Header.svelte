<script>
  import { Link } from "svelte-routing";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

  import Logo from "./Logo.svelte";
</script>

<TopAppBar variant="static">
  <Row>
    <Section>
      <Title>
        <Link to="/">
          <Logo />
        </Link>
      </Title>
    </Section>
  </Row>
</TopAppBar>
