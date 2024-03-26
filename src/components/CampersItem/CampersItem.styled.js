import styled from "styled-components";
import { globalColor } from "../../styles/root";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-top: 100px;
  margin-right: 64px;
  padding: 24;
  gap: 32px;
  margin-bottom: 80px;
`;

export const Container = styled.div`
  display: flex;
  height: 358px;
  width: 860px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  margin-top: 50px;
`;

export const Div = styled.div``;

export const Img = styled.img`
  width: 290px;
  height: 310px;
  border-radius: 10px;
  overflow: hidden;
  margin: 24px;
  object-fit: cover;
  object-position: 70%;
`;

// info block

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 526px;
  margin: 24px 24px 24px 0;
`;

export const NamePrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 125%;
  color: ${globalColor.colorBlack};
  margin: 0;
`;

export const Price = styled.h2`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 125%;
  color: ${globalColor.colorBlack};
  margin: 0;
`;

export const ReviewsLocation = styled.div`
  display: flex;
`;

export const Reviews = styled.p`
  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  margin: 8px 16px 0 0;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  margin: 8px 0 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${globalColor.colorGrey};
`;

export const Description = styled.p`
  margin: 24px 0 0 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${globalColor.colorGrey};
`;

export const Descriptions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 526px;
  gap: 8px;
  margin-top: 24px;
`;

export const Fill = styled.li`
  display: flex;
  background-color: ${globalColor.colorWhiteGrey};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: center;
  padding: 12px 18px;
`;

export const Span = styled.span`
  display: inline-block;
  width: auto;
`;

export const BTN = styled.button`
  display: flex;
  background-color: ${globalColor.colorRed};
  color: ${globalColor.colorWhite};
  justify-content: center;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 200px;
  padding: 16px 40px;
  width: 166px;
  height: 56px;
  padding: 0;
  line-height: 150%;
  letter-spacing: -0.01em;
  margin-top: 24px;
  border: none;
`;

export const LoadMore = styled.button`
  background-color: ${globalColor.colorRed};
  color: ${globalColor.colorWhite};
  width: auto;
  padding: 16px 40px;
  border-radius: 200px;
  border: none;
`;
