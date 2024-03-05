import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { ButtonGroup } from "@chakra-ui/react";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">Link</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
