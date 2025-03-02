console.log("Extension is working....");

function findComposeToolBar() {
  const selectors = [".btC", ".aDh", '[role="toolbar"]', ".gU.Up"];
  for (const selector of selectors) {
    const toolBar = document.querySelector(selector);
    if (toolBar) return toolBar;
    return null;
  }
}

function getEmailContent() {
  const selectors = [".h7", ".a3s.aiL", "gmail_quote", '[role="presentation"]'];
  for (const selector of selectors) {
    const content = document.querySelector(selector);
    if (content) return content.innerText.trim();
    return "";
  }
}

function createAIButton() {
  const button = document.createElement("div");
  button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3";
  button.style.marginRight = "8px";
  button.innerHTML = "AI Reply";
  button.setAttribute("role", "button");
  button.setAttribute("data-tooltip", "Generate AI Reply");
  return button;
}

function injectButton() {
  const existingButton = document.querySelector(".ai-reply-btn");
  if (existingButton) existingButton.remove();

  const toolBar = findComposeToolBar();
  if (!toolBar) {
    console.log("not found toolbar");
    return;
  }
  console.log("toolbar found.....");
  const button = createAIButton();
  button.classList.add("ai-reply-btn");

  button.addEventListener("click", async () => {
    try {
      button.innerHTML = "Generating....";
      button.disabled = true;

      const emailContent = getEmailContent();
      const resposne = await fetch("http://localhost:8080/api/email/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailContent: emailContent,
          tone: "naughty",
        }),
      });
      if (!resposne.ok) {
        throw new Error("API REQUEST FAILED!!");
      }
      const generatedReply = await resposne.text();
      const composeBox = document.querySelector(
        '[role="textbox"][g_editable="true"]'
      );
      if (composeBox) {
        composeBox.focus();
        document.execCommand("insertText", false, generatedReply);
      } else {
        console.log("ComposeBox was not found");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to generate reply");
    } finally {
      button.innerHTML = "AI Reply";
      button.disabled = false;
    }
  });
  toolBar.insertBefore(button, toolBar.firstChild);
}

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    const addedNotes = Array.from(mutation.addedNodes);
    const hasComposeElement = addedNotes.some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches('.aDH,.btc,[role="dialog"]') ||
          node.querySelector('.aDh,.btC,[role="dialog"]'))
    );
    if (hasComposeElement) {
      console.log("Compose window detected...");
      setTimeout(injectButton, 500);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
