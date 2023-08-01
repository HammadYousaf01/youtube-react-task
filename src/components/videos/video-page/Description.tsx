import { useState } from "react";
import {
  styled,
  Box,
  BoxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { formatDistance } from "date-fns";

import { prettyPrintNumbers } from "components/videos/utils";

interface Props {
  description: string | undefined;
  viewCount: string | undefined;
  postedAt: string | undefined;
}

const StyledArrowContainer = styled(Box)<BoxProps>(() => ({
  height: 30,
  borderBottom: "1px solid #616060",
  display: "flex",
  justifyContent: "end",
  ":hover": {
    cursor: "pointer",
  },
}));

const StyledDescription = styled(Typography)<TypographyProps>(() => ({
  marginTop: 8,
  padding: 8,
  borderRadius: 2,
  backgroundColor: "rgba(0, 0, 0, 0.05)",
}));

const Description: React.FC<Props> = ({ description, viewCount, postedAt }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Box sx={{ mt: 1 }}>
      <StyledArrowContainer
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? (
          <ArrowDropUp sx={{ fontSize: 30 }} />
        ) : (
          <ArrowDropDown sx={{ fontSize: 30 }} />
        )}
      </StyledArrowContainer>
      {showDescription && (
        <StyledDescription>
          <Typography sx={{ fontWeight: 600 }}>
            {prettyPrintNumbers(viewCount!)} views{" "}
            {formatDistance(new Date(postedAt!), new Date(), {
              addSuffix: true,
            })}
          </Typography>
          {description}
        </StyledDescription>
      )}
    </Box>
  );
};

export default Description;
